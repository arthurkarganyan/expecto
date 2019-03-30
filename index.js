var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function expecto(a) {
    return {
        toEq: b => {
            const aStr = JSON.stringify(a);
            const bStr = JSON.stringify(b);
            if (aStr !== bStr) {
                throw Error(`Expected ${aStr} to equal ${bStr}`);
            }
            else {
                console.log(".");
            }
        }
    };
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all([]);
        expecto(5).toEq("3");
    });
}
// main()
expecto("aab").toEq("a" + "b");
// expecto([5]).toEq([5])
