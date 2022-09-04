import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      name: 'Eileen Russell',
      image: 'https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg',
      email: 'eileenrussell@xumonk.com',
      birthday: new Date('2020-08-09T08:51:00'),
      phones: ['+1 (824) 598-2328'],
    },
    {
      name: 'Francis Mckay',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UNzW-04v3tAQAc7FXLjc4xtNfKSXi3A0DQ&usqp=CAU',
      email: 'francismckay@xumonk.com',
      birthday: new Date('2014-01-15T08:20:08'),
      phones: [],
    },
    {
      name: 'Jewell Schultz',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg',
      email: 'jewellschultz@xumonk.com',
      birthday: new Date('2020-07-03T01:03:19'),
      phones: ['+1 (932) 538-2367', '+1 (949) 503-2184'],
    },
    {
      name: 'Goodman Hunter',
      image: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',
      email: 'goodmanhunter@xumonk.com',
      birthday: new Date('2016-02-22T11:42:38'),
      phones: [],
    },
    {
      name: 'Beck Webb',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22cmhOckuaAG-grwnx4Be1nmayDhb_t1BJQ&usqp=CAU',
      email: 'beckwebb@xumonk.com',
      birthday: new Date('2019-08-24T10:40:04'),
      phones: ['+1 (986) 566-2317', '+1 (950) 438-3960', '+1 (997) 562-3636'],
    },
    {
      name: 'Tabitha Combs',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjS7DHESwi-0O_iaIMeU5_9LS9SC8PNMpyRw&usqp=CAU',
      email: 'tabithacombs@xumonk.com',
      birthday: new Date('2018-03-24T01:55:12'),
      phones: ['+1 (897) 437-2473'],
    },
    {
      name: 'Schmidt Jennings',
      image: 'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'schmidtjennings@xumonk.com',
      birthday: new Date('2014-09-24T04:18:20'),
      phones: [],
    },
    {
      name: 'Bullock Martinez',
      image: 'https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png',
      email: 'bullockmartinez@xumonk.com',
      birthday: new Date('2016-05-18T11:26:22'),
      phones: ['+1 (889) 424-3036', '+1 (819) 403-2637'],
    },
    {
      name: 'Reva Stafford',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/001/912/631/small_2x/beautiful-woman-in-frame-circular-avatar-character-free-vector.jpg',
      email: 'revastafford@xumonk.com',
      birthday: new Date('2022-02-21T03:10:47'),
      phones: ['+1 (929) 465-2033', '+1 (952) 546-2373'],
    },
    {
      name: 'Franco Mccray',
      image: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg',
      email: 'francomccray@xumonk.com',
      birthday: new Date('2020-03-02T07:29:18'),
      phones: ['+1 (900) 587-3989'],
    },
  ];
  constructor() {}
  getContacts(): Contact[] {
    return this.contacts;
  }
}