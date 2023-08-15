"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
var port = 8081;
var prisma = new client_1.PrismaClient();
app.use((0, cors_1["default"])());
app.get('/seasons', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var seasons;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.seasons.findMany()];
            case 1:
                seasons = _a.sent();
                res.json(seasons);
                return [2 /*return*/];
        }
    });
}); });
app.get('/seasons/:season/drivers', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var season, driverStandings;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                season = req.params.season;
                return [4 /*yield*/, prisma.driverStandings.findMany({
                        where: { season: season }
                    })];
            case 1:
                driverStandings = _a.sent();
                res.json(driverStandings);
                return [2 /*return*/];
        }
    });
}); });
app.get('/seasons/:season/constructors', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var season, constructorStandings;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                season = req.params.season;
                return [4 /*yield*/, prisma.constructorStandings.findMany({
                        where: { season: season }
                    })];
            case 1:
                constructorStandings = _a.sent();
                res.json(constructorStandings);
                return [2 /*return*/];
        }
    });
}); });
app.get('/drivers/:driverId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var driverId, drivers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                driverId = req.params.driverId;
                return [4 /*yield*/, prisma.drivers.findMany({
                        where: { driverId: driverId }
                    })];
            case 1:
                drivers = _a.sent();
                res.json(drivers);
                return [2 /*return*/];
        }
    });
}); });
app.get('/constructors/:constructorId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var constructorId, constructors;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                constructorId = req.params.constructorId;
                return [4 /*yield*/, prisma.teams.findMany({
                        where: { constructorId: constructorId }
                    })];
            case 1:
                constructors = _a.sent();
                res.json(constructors);
                return [2 /*return*/];
        }
    });
}); });
app.get('/seasons/:season/races', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var season, races;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                season = req.params.season;
                return [4 /*yield*/, prisma.races.findMany({
                        where: { season: season }
                    })];
            case 1:
                races = _a.sent();
                console.log('races', races);
                res.json(races);
                return [2 /*return*/];
        }
    });
}); });
app.get('/circuits/:circuitId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var circuitId, circuits;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                circuitId = req.params.circuitId;
                return [4 /*yield*/, prisma.circuits.findMany({
                        where: { circuitId: circuitId }
                    })];
            case 1:
                circuits = _a.sent();
                res.json(circuits);
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
