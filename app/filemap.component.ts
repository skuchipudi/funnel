import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

declare var jQuery:any;
declare var d3: any;


@Component({
    template: `
        <h1>Files Map</h1>
        <!-- File Tree renders thu the renderTree() lifecycle methods-->
        `,
})

export class FileMapComponent  {
    
    ngOnInit() { 
        console.log('Filemap: ngOnInit() called');
    }
    
    ngAfterViewInit() {
        console.log('Filemap: ngAfterViewInit() called');
     	//this.renderTryme(); 
        this.renderTree();
    }
    // you need to call this and clear svg
    // or else the graph will appear in every page.
    ngOnDestroy()
    {
        console.log('Filemap: noOnDestroy() called');
        this.destroyTree();
    }

    // TODO
    // Clean up the D3 Dom after you
    // exit this Component page      
    destroyTree()
    {
      d3.select("svg") .remove();
    }

    renderTree(){
        var margin = {top: 20, right: 120, bottom: 20, left: 120},
        width = 960 - margin.right - margin.left,
        height = 800 - margin.top - margin.bottom;

        var i = 0,
        duration = 750,
        root:any;

        var tree = d3.layout.tree()
        .size([height, width]);

        var diagonal = d3.svg.diagonal()
        .projection(function(d:any) { return [d.y, d.x]; });

        var svg = d3.select("body").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //d3.json("https://bl.ocks.org/mbostock/raw/4063550/flare.json", function(error:any, flare:any) {
        d3.json("d3/flare.json", function(error:any, flare:any) {
        if (error) throw error;

        root = flare;
        root.x0 = height / 2;
        root.y0 = 0;

        function collapse(d:any) {
            if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
         }
    }

    root.children.forEach(collapse);
    update(root);
    });

    d3.select(self.frameElement).style("height", "800px");

    function update(source:any) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d:any) { d.y = d.depth * 180; });

    // Update the nodes…
    var node = svg.selectAll("g.node")
      .data(nodes, function(d:any) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d:any) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

    nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d:any) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("text")
      .attr("x", function(d:any) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d:any) { return d.children || d._children ? "end" : "start"; })
      .text(function(d:any) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
   var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d:any) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d:any) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d:any) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d:any) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d:any) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d:any) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d:any) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d:any) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

}
}