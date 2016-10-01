System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FileMapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileMapComponent = (function () {
                function FileMapComponent() {
                }
                FileMapComponent.prototype.ngOnInit = function () {
                    console.log('Filemap: ngOnInit() called');
                };
                FileMapComponent.prototype.ngAfterViewInit = function () {
                    console.log('Filemap: ngAfterViewInit() called');
                    //this.renderTryme(); 
                    this.renderTree();
                };
                // you need to call this and clear svg
                // or else the graph will appear in every page.
                FileMapComponent.prototype.ngOnDestroy = function () {
                    console.log('Filemap: noOnDestroy() called');
                    this.destroyTree();
                };
                // TODO
                // Clean up the D3 Dom after you
                // exit this Component page      
                FileMapComponent.prototype.destroyTree = function () {
                    d3.select("svg").remove();
                };
                FileMapComponent.prototype.renderTree = function () {
                    var margin = { top: 20, right: 120, bottom: 20, left: 120 }, width = 960 - margin.right - margin.left, height = 800 - margin.top - margin.bottom;
                    var i = 0, duration = 750, root;
                    var tree = d3.layout.tree()
                        .size([height, width]);
                    var diagonal = d3.svg.diagonal()
                        .projection(function (d) { return [d.y, d.x]; });
                    var svg = d3.select("body").append("svg")
                        .attr("width", width + margin.right + margin.left)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    //d3.json("https://bl.ocks.org/mbostock/raw/4063550/flare.json", function(error:any, flare:any) {
                    d3.json("d3/flare.json", function (error, flare) {
                        if (error)
                            throw error;
                        root = flare;
                        root.x0 = height / 2;
                        root.y0 = 0;
                        function collapse(d) {
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
                    function update(source) {
                        // Compute the new tree layout.
                        var nodes = tree.nodes(root).reverse(), links = tree.links(nodes);
                        // Normalize for fixed-depth.
                        nodes.forEach(function (d) { d.y = d.depth * 180; });
                        // Update the nodes…
                        var node = svg.selectAll("g.node")
                            .data(nodes, function (d) { return d.id || (d.id = ++i); });
                        // Enter any new nodes at the parent's previous position.
                        var nodeEnter = node.enter().append("g")
                            .attr("class", "node")
                            .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                            .on("click", click);
                        nodeEnter.append("circle")
                            .attr("r", 1e-6)
                            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
                        nodeEnter.append("text")
                            .attr("x", function (d) { return d.children || d._children ? -10 : 10; })
                            .attr("dy", ".35em")
                            .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
                            .text(function (d) { return d.name; })
                            .style("fill-opacity", 1e-6);
                        // Transition nodes to their new position.
                        var nodeUpdate = node.transition()
                            .duration(duration)
                            .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
                        nodeUpdate.select("circle")
                            .attr("r", 4.5)
                            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
                        nodeUpdate.select("text")
                            .style("fill-opacity", 1);
                        // Transition exiting nodes to the parent's new position.
                        var nodeExit = node.exit().transition()
                            .duration(duration)
                            .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
                            .remove();
                        nodeExit.select("circle")
                            .attr("r", 1e-6);
                        nodeExit.select("text")
                            .style("fill-opacity", 1e-6);
                        // Update the links…
                        var link = svg.selectAll("path.link")
                            .data(links, function (d) { return d.target.id; });
                        // Enter any new links at the parent's previous position.
                        link.enter().insert("path", "g")
                            .attr("class", "link")
                            .attr("d", function (d) {
                            var o = { x: source.x0, y: source.y0 };
                            return diagonal({ source: o, target: o });
                        });
                        // Transition links to their new position.
                        link.transition()
                            .duration(duration)
                            .attr("d", diagonal);
                        // Transition exiting nodes to the parent's new position.
                        link.exit().transition()
                            .duration(duration)
                            .attr("d", function (d) {
                            var o = { x: source.x, y: source.y };
                            return diagonal({ source: o, target: o });
                        })
                            .remove();
                        // Stash the old positions for transition.
                        nodes.forEach(function (d) {
                            d.x0 = d.x;
                            d.y0 = d.y;
                        });
                    }
                    // Toggle children on click.
                    function click(d) {
                        if (d.children) {
                            d._children = d.children;
                            d.children = null;
                        }
                        else {
                            d.children = d._children;
                            d._children = null;
                        }
                        update(d);
                    }
                };
                FileMapComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Files Map</h1>\n        <!-- File Tree renders thu the renderTree() lifecycle methods-->\n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileMapComponent);
                return FileMapComponent;
            }());
            exports_1("FileMapComponent", FileMapComponent);
        }
    }
});
//# sourceMappingURL=filemap.component.js.map