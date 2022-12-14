import { expect } from "chai";
import { set } from "./helpers";

describe('set function',()=> {
    let obj: Record<string, unknown>;
    const keypath = 'test';
    const value = 'some value';

    beforeEach(() => {
      obj = {};
    });

    it('should set a value by keypath to the object', ()=>{

        set(obj, keypath, value);

        expect(obj).to.haveOwnProperty(keypath, value);
    });

    it('should return original object', ()=>{

        const result = set(obj, keypath, value);

        obj['test2'] = 'another value';

        expect(result).to.equal(obj);
    });

    it('should return original object if it is not an object', ()=>{
        const notAnObj = 'string';

        const result = set(notAnObj, keypath, value);

        expect(result).to.equal(notAnObj);
    });


    it('should throw an error if path is not a string', ()=>{

        const keypathNotString = 10;
        //@ts-ignore because we want to check behaviour in runtime
        const f = () => set(obj, keypathNotString, value);

        expect(f).to.throw(Error);
    })
}) 
