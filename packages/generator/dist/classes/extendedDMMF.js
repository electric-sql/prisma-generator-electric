"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedDMMF = void 0;
const extendedDMMFDatamodel_1 = require("./extendedDMMFDatamodel");
const extendedDMMFMappings_1 = require("./extendedDMMFMappings");
const extendedDMMFSchema_1 = require("./extendedDMMFSchema");
class ExtendedDMMF {
    constructor(dmmf) {
        Object.defineProperty(this, "datamodel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mappings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.datamodel = this._getExtendedDatamodel(dmmf);
        this.schema = this._getExtendedSchema(dmmf);
        this.mappings = this._getExtendedMappings(dmmf);
    }
    _getExtendedDatamodel(dmmf) {
        return new extendedDMMFDatamodel_1.ExtendedDMMFDatamodel(dmmf.datamodel);
    }
    _getExtendedSchema(dmmf) {
        return new extendedDMMFSchema_1.ExtendedDMMFSchema(dmmf.schema, this.datamodel);
    }
    _getExtendedMappings(dmmf) {
        return new extendedDMMFMappings_1.ExtendedDMMFMappings(dmmf.mappings);
    }
}
exports.ExtendedDMMF = ExtendedDMMF;
//# sourceMappingURL=extendedDMMF.js.map