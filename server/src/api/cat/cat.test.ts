import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import * as catService from './cat.service';
import catModel from './cat.model';
import server from '../../server';
chai.use(chaiAsPromised);

const data = [
  {
    breedId: 'amis',
    name: 'Australian Mist',
    searchCount: 55,
  },
  {
    breedId: 'aege',
    name: 'Aegean',
    searchCount: 10,
  },
  {
    breedId: 'abob',
    name: 'American Bobtail',
    searchCount: 5,
  },
  {
    breedId: 'acur',
    name: 'American Curl',
    searchCount: 6,
  },
  {
    breedId: 'asho',
    name: 'American Shorthair',
    searchCount: 1,
  },
];

describe('Cat Service', () => {
  before(async () => {
    await catModel.deleteMany({});
  });
  after(() => server.close());

  describe('Cat Service => Search by breeds name', () => {
    it('Should search for cat breeds by name', () => {
      return expect(catService.searchBreeds('beng'))
        .to.eventually.fulfilled.and.to.be.an('array')
        .with.length.greaterThan(0);
    });

    it('Should return empty array if no breeds found', () => {
      return expect(catService.searchBreeds(''))
        .to.eventually.fulfilled.and.to.be.an('array')
        .with.length(0);
    });
  });

  describe('Cat Service => Get all breeds available', () => {
    it('Should return an array with all breeds', () => {
      return expect(
        catService.getBreeds()
      ).to.eventually.be.fulfilled.and.have.deep.include({
        id: 'abys',
        name: 'Abyssinian',
      });
    });
  });

  describe('Cat Service => Track breed ', () => {
    const data = {
      breedId: 'abys',
      name: 'Abyssinian',
    };

    it('Should Add a breed tracking record to db', () => {
      return expect(
        catService.trackBreed(data)
      ).to.eventually.be.fulfilled.and.have.property('name', data.name);
    });

    it('Should return null if no breed found', () => {
      return expect(
        catService.trackBreed({ ...data, breedId: 'nothing' })
      ).to.eventually.be.fulfilled.and.be.equal(null);
    });

    it('Should update search count if breed already in db', () => {
      return expect(
        catService.trackBreed(data)
      ).to.eventually.be.fulfilled.and.have.property('searchCount', 2);
    });
  });

  describe('Cat Service => Get Top Cat Breeds', () => {
    before(async () => {
      await catModel.insertMany(data);
    });

    it('Shuold return the top 3 cat breeds', () => {
      return expect(catService.topCatBreed(3))
        .to.eventually.be.fulfilled.and.be.an('array')
        .with.length(3);
    });
  });

  describe('Cat Service => Get cat images', () => {
    it('Should get all breed images', () => {
      return expect(catService.getBreedImages('abys'))
        .to.eventually.be.an('array')
        .with.length(8);
    });

    it('Should return empty array if breed name is incorrect', () => {
      return expect(
        catService.getBreedImages('nothing')
      ).to.eventually.to.have.length(0);
    });
  });
});
