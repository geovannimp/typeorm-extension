import {buildConnectionOptions, createDefaultSeederOptions} from "../../../src";
import * as path from "path";

describe('src/connection/index.ts', () => {
    it('should build connection options', async () => {
        const rootPath : string = path.resolve(process.cwd(), 'test/data/typeorm');
        const connectionOptions = await buildConnectionOptions({
            root: rootPath,
            configName: 'ormconfig.json'
        });

        let ormConfig = require('../../data/typeorm/ormconfig.json');
        ormConfig = createDefaultSeederOptions(ormConfig);

        expect(connectionOptions).toEqual(ormConfig);
    })
})
