import { Injectable } from '@angular/core';
import { Tile } from '../models';

@Injectable()
export class FeaturesService {

  constructor() { }

  // getById(_id: string): Promise<Tile> {
  //     return http.
  //     get<Tile>(apiUrl + `/features/get/${_id}`)
  //     .toPromise()
  //     .catch(handleError);
  // }

  getById(_id: string): Promise<Tile> {
    return new Promise<Tile>((resolve,reject) => {
      try {

        this.getAll().then(tiles => {
          resolve(tiles.find(xx => xx._id === _id));
        });
        
      } catch (error) {
        reject(error);
      }

    });
  }

  getAll(): Promise<Array<Tile>> {
    return new Promise<Array<Tile>>((resolve,reject) => {
      try {
        let tiles = [];
        tiles.push(new Tile('0','boh','shopping_cart',
          'Maecenas rhoncus, metus vel luctus feugiat, arcu odio hendrerit odio'
        ));
        tiles.push(new Tile('1','La legalità','euro_symbol','some text happens'));
        tiles.push(new Tile('2','Diritto di famiglia','pan_tool','some text happens'));
        tiles.push(new Tile('3','Successioni','shopping_cart','some text happens'));
        tiles.push(new Tile('4','Pareri','euro_symbol','some text happens'));
        tiles.push(new Tile('5','ah boh','pan_tool','some text happens'));
        tiles.push(new Tile('6','boh','shopping_cart','some text happens'));
        tiles.push(new Tile('7','euro','euro_symbol','some text happens'));

        resolve(tiles);
      } catch (error) {
        reject(error);
      }
    });
  }
}
