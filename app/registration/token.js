System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Token;
    return {
        setters:[],
        execute: function() {
            Token = (function () {
                function Token(secretKey, status) {
                    this.secretKey = secretKey;
                    this.status = status;
                }
                return Token;
            }());
            exports_1("Token", Token);
        }
    }
});
//# sourceMappingURL=token.js.map