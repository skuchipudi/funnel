import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var d3: any;

@Injectable()
export class FileMapService {
    // private _url = "http://jsonplaceholder.typicode.com/albums";

    destroyTree()
    {
      d3.select('svg') .remove();
    }

    renderTree(partnerid: any)
    {
        let margin = {top: 20, right: 120, bottom: 20, left: 120},
        width = 960 - margin.right - margin.left,
        height = 800 - margin.top - margin.bottom;

        let i = 0,
        duration = 750,
        root: any;

        let tree = d3.layout.tree()
        .size([height, width]);

        let diagonal = d3.svg.diagonal()
        .projection(function(d: any) { return [d.y, d.x]; });

        let svg = d3.select('body').append('svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        //d3.json("https://bl.ocks.org/mbostock/raw/4063550/flare.json", function(error:any, flare:any) {
        //d3.json('d3/flare.short.json', function(error: any, flare: any) {
        // d3.json('d3/d3.json', function(error: any, flare: any) {
        d3.json('http://localhost:8080/partnerservices//getclienttree/' + partnerid, function(error: any, flare: any) {
        if (error) throw error;

        root = flare;
        root.x0 = height / 2;
        root.y0 = 0;

        function collapse(d: any) {
            if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
         }
        }

        root.children.forEach(collapse);
        update(root);
        });

        d3.select(self.frameElement).style('height', '800px');

        function update(source: any) {

        // Compute the new tree layout.
        let nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function(d: any) { d.y = d.depth * 180; });

        // Update the nodes…
        let node = svg.selectAll('g.node')
      .data(nodes, function(d: any) { return d.id || (d.id = ++i); });

        // Enter any new nodes at the parent's previous position.
        let nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', function(d: any) { return 'translate(' + source.y0 + ',' + source.x0 + ')'; })
        .on('click', click);

        nodeEnter.append('circle')
        .attr('r', 1e-6)
        .style('fill', function(d: any) { return d._children ? 'lightsteelblue' : '#fff'; });

        nodeEnter.append('text')
        .attr('x', function(d: any) { return d.children || d._children ? -10 : 10; })
        .attr('dy', '.35em')
        .attr('text-anchor', function(d: any) { return d.children || d._children ? 'end' : 'start'; })
        .text(function(d: any) { return d.name; })
        .style('fill-opacity', 1e-6);

    // Transition nodes to their new position.
       let nodeUpdate = node.transition()
        .duration(duration)
        .attr('transform', function(d: any) { return 'translate(' + d.y + ',' + d.x + ')'; });

    nodeUpdate.select('circle')
      .attr('r', 4.5)
      .style('fill', function(d: any) { return d._children ? 'lightsteelblue' : '#fff'; });

    nodeUpdate.select('text')
      .style('fill-opacity', 1);

    // Transition exiting nodes to the parent's new position.
    let nodeExit = node.exit().transition()
      .duration(duration)
      .attr('transform', function(d: any) { return 'translate(' + source.y + ',' + source.x + ')'; })
      .remove();

    nodeExit.select('circle')
      .attr('r', 1e-6);

    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // Update the links…
    let link = svg.selectAll('path.link')
      .data(links, function(d: any) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert('path', 'g')
      .attr('class', 'link')
      .attr('d', function(d: any) {
        let o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
   link.transition()
      .duration(duration)
      .attr('d', diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr('d', function(d: any) {
        let o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d: any) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d: any) {
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
