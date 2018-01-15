import { Injectable } from '@angular/core';
import { News } from '../models';

@Injectable()
export class NewsService {

  constructor() { }

  getAll(): Promise<Array<News>> {
    return new Promise<Array<News>>((resolve,reject) => {
      try {
        let news = [];

        news.push(new News('prima','la prima news','Aliquam sodales purus nunc, at ultricies turpis egestas at. Mauris semper et turpis eu aliquet. Nullam in vehicula ex. Vivamus feugiat nulla lacus, ac euismod ligula euismod quis. Ut dapibus ante lectus, a elementum sapien cursus ut. Nunc at mauris id dui posuere interdum at sed orci. Morbi sem quam, maximus ut metus non, finibus eleifend nibh.', new Date()));
        news.push(new News('cose succedono','pazzesco','Aliquam sodales purus nunc, at ultricies turpis egestas at. Mauris semper et turpis eu aliquet. Nullam in vehicula ex. Vivamus feugiat nulla lacus, ac euismod ligula euismod quis. Ut dapibus ante lectus, a elementum sapien cursus ut. Nunc at mauris id dui posuere interdum at sed orci. Morbi sem quam, maximus ut metus non, finibus eleifend nibh.', new Date()));
        news.push(new News('ma quanto è bello!','andare al mare mentre gli altri lavorano','Aliquam sodales purus nunc, at ultricies turpis egestas at. Mauris semper et turpis eu aliquet. Nullam in vehicula ex. Vivamus feugiat nulla lacus, ac euismod ligula euismod quis. Ut dapibus ante lectus, a elementum sapien cursus ut. Nunc at mauris id dui posuere interdum at sed orci. Morbi sem quam, maximus ut metus non, finibus eleifend nibh.', new Date()));

        resolve(news);
      } catch (error) {
        reject(error);
      }
    });
  }

}
