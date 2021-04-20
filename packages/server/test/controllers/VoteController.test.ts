import 'reflect-metadata';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe } from 'mocha';
import sinon, { SinonSandbox } from 'sinon';

chai.use(chaiAsPromised);

let sandbox: SinonSandbox;
describe('VoteController', () => {
    describe('unimplemented', () => {
        beforeEach(() => {
            sandbox = sinon.createSandbox();
        });
        afterEach(() => {
            sandbox.restore();
        });

        xit('should not be executed', async () => {
            console.log('Empty');
        });
    });
});