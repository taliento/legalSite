import { Injectable } from '@angular/core';
import { News } from '../models';

@Injectable()
export class NewsService {

  constructor() { }

  getAll(): Promise<Array<News>> {
    return new Promise<Array<News>>((resolve,reject) => {
      try {
        let news = [];

        news.push(new News('1','prima','la prima news','LA PRIMA NEWS Aliquam sodales purus nunc, at ultricies turpis egestas at. Mauris semper et turpis eu aliquet. Nullam in vehicula ex. Vivamus feugiat nulla lacus, ac euismod ligula euismod quis. Ut dapibus ante lectus, a elementum sapien cursus ut. Nunc at mauris id dui posuere interdum at sed orci. Morbi sem quam, maximus ut metus non, finibus eleifend nibh.', new Date()));
        news.push(new News('2','cose succedono','pazzesco','LA SECONDA NEWS Aliquam sodales purus nunc, at ultricies turpis egestas at. Mauris semper et turpis eu aliquet. Nullam in vehicula ex. Vivamus feugiat nulla lacus, ac euismod ligula euismod quis. Ut dapibus ante lectus, a elementum sapien cursus ut. Nunc at mauris id dui posuere interdum at sed orci. Morbi sem quam, maximus ut metus non, finibus eleifend nibh.', new Date()));
        news.push(new News('3','ma quanto è bello!','andare al mare mentre gli altri lavorano','LA TERZA NEWS  Aliquam sodales purus nunc, at ultricies turpis egestas at. Mauris semper et turpis eu aliquet. Nullam in vehicula ex. Vivamus feugiat nulla lacus, ac euismod ligula euismod quis. Ut dapibus ante lectus, a elementum sapien cursus ut. Nunc at mauris id dui posuere interdum at sed orci. Morbi sem quam, maximus ut metus non, finibus eleifend nibh.', new Date()));

        resolve(news);
      } catch (error) {
        reject(error);
      }
    });
  }

  getById(_id: string): Promise<News> {
    return new Promise<News>((resolve,reject) => {
      try {

        this.getAll().then(news => {
          resolve(news.find(xx => xx._id === _id));
        });

      } catch (error) {
        reject(error);
      }

    });
  }

}
