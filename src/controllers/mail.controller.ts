/* eslint-disable @typescript-eslint/no-explicit-any */
// Uncomment these imports to begin using these cool features!

import {get, HttpErrors} from '@loopback/rest';
const nodemailer = require('nodemailer');
// import {inject} from '@loopback/core';


export class MailController {
  constructor() {}

  //Devuelve todos los registros, con o sin filtro de busqueda SELECT WHERE
  @get('/mail', {
    responses: {
      '200': {
        description: 'Array of Categoria model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array'
            },
          },
        },
      },
    },
  })
  async find(
  ): Promise<Boolean> {
    const res: Boolean = true
    try {
      //Creamos el objeto de transporte
      const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'tontin@hotmail.com',
          pass: 'xxxxxx'
        }
      });
      const mensaje = "Hola desde nodejs... T.T  XD XD";

      const mailOptions = {
        from: 'tontinn@hotmail.com',
        to: 'otrotontin@gmail.com',
        subject: 'Test Mail',
        text: mensaje
      };

      transporter.sendMail(mailOptions, function (error: any, info: {response: string;}) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
    } catch (error) {
      throw new HttpErrors.Conflict('Ocurrió un error ' + error)
    }
    return res
  }

}
