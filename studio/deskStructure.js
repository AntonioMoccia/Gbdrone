import S from '@sanity/desk-tool/structure-builder'
import {FaHome,FaInfo} from 'react-icons/fa'
import {GrServices} from 'react-icons/gr'
import {RiContactsFill} from 'react-icons/ri'

export default () =>
S.list()
    .title('Gbdrone')
        .items(
            [
                S.listItem()
                .title('Home Page')
                .icon(FaHome)
                .child(
                    S.document()
                    .title('Home')
                        .schemaType('HomePage')
                        .documentId('HomePage')
                     
                ),

            /*    S.listItem()
                .title('Service Page')
                .icon(GrServices)
                .child(
                    S.document()
                    .title('Servizi')
                    
                        .schemaType('ServicesPage')
                        .documentId('ServicesPage')
                   
                ),*/
            
                S.listItem()
                .title('Contact Page')
                .icon(RiContactsFill)
                .child(
                    S.document()
                    .title('Contatti')
                    
                        .schemaType('ContactPage')
                        .documentId('ContactPage')
                   
                ),
                S.listItem()
                .title('About Page')
                .icon(FaInfo)
                .child(
                    S.document()
                    .title('About')
                    
                        .schemaType('AboutPage')
                        .documentId('AboutPage')
                   
                ),
      
                ...S.documentTypeListItems().filter(item=>!['HomePage','ContactPage','media.tag','ServicesPage','AboutPage'].includes(item.getId()))
            ]
        )    