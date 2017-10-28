'use strict'
import uuid from 'uuid-base62'

export default {
  getUser () {
    return {
      // alerts: [],
      // avatar: '/standard.png',
      // badges: [],
      bio: 'it is a bio with 200 ascii length',
      // createdAt: 2016-08-26T18:40:42.448Z,
      email: '6e0cf970-7958-435d-8089-1343100586d0@automata.co',
      // id: '32c28f13-c16b-4de8-9cea-dcf40a3dac20',
      // masteries: [],
      // messages: [],
      name: 'whatever user',
      password: '72bb97299c418b00872a1ccc8826cced99fa4173bf8d61fad696653381634b77',
      // publicId: '1xMwRmVnzNsFMORq61GCeA',
      // points: 0,
      // skills: [],
      username: `user_pepe_random_we`
    }
  },
  getImage () {
    return {
      id: 'e0de1420-01ba-4e19-91c6-00a76ba0668a',
      publicId: '6QjLPtk8EYHsb0G9FIqftU',
      userId: `user_${uuid.v4()}`,
      src: 'http://nana.com/6QjLPtk8EYHsb0G9FIqftU.jpg',
      description: '#awesome',
      awards: ['awesome'],
      createdAt: new Date().toString()
    }
  },
  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },
  getContrib () {
    return {
      publicId: '6QjLPtk8EYHsb0G9FIqftU',
      id: 'e0de1420-01ba-4e19-91c6-00a76ba0668a',
      title: 'Una contrib',
      dateAdded: new Date(),
      user: {
        userId: '6QjLPtk8EYHsb0G9FIqftU',
        username: 'roberto',
        title: 'Esparandaculo',
        avatar: 'pepe.jpg'
      },
      tags: ['#love', '#data'],
      data: {
        type: 'message',
        info: 'esta es mi contribucuon',
        image: 'noTieneImage.png'
      },
      messages: [
        {
          date: new Date(),
          message: 'hola mundo',
          user: {
            username: 'titi',
            avatar: 'nono.png'
          }
        }
      ],
      rate: ['pepe', 'conan'],
      dev: {
        message: null,
        approval: false
      }
    }
  },
  getMom () {
    return {
      avatar: '/img/default-bete.png',
      badges: 'all',
      masteries: 'Les mains de la bête',
      level: 'all',
      username: 'Lucifer',
      title: 'le bête',
      byAdmin: 'Chuck Norris'
    }
  }
}
