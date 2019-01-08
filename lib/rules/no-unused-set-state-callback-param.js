module.exports = function(context) {
    return {
        "CallExpression": function(node) {
            const callee = node.callee;
            if(callee.object.type === 'ThisExpression' &&
                callee.property.name === "setState" &&
                node.arguments[0] &&
                node.arguments[0].type === 'ArrowFunctionExpression' &&
                !node.arguments[0].params.length) {
                    context.report(node, "Method setState called with callback that not using parameters");
            }
        }
    };
};

module.schema = [];
