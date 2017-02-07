jQuery.fn.getPath = function () {
    if (this.length != 1) throw 'Requires one element.';
    var path, node = this;
    if (node[0].id) return "#" + node[0].id;
    while (node.length) {
        var realNode = node[0],
            name = realNode.localName;
        if (!name) break;
        name = name.toLowerCase();
        var parent = node.parent();
        var siblings = parent.children(name);
        if (siblings.length > 1) {
            name += ':eq(' + siblings.index(realNode) + ')';
        }
        path = name + (path ? '>' + path : '');
        node = parent;
    }
    return path;
};