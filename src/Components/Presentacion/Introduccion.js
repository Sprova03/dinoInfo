import React from 'react'
import { Titulo } from './Titulo'
import { Mordisco } from './Mordisco'

export const Introduccion = () => {
  return (
    <div className='presentacion-introdiccion-container'>
      <Titulo/>
    <h4 className='presentacion-introdiccion'>En DinoInfo, te llevaremos a un viaje emocionante a través del tiempo y te transportaremos a una era prehistórica para que conozcas en profundidad a los gigantes que habitaron la Tierra hace millones de años.</h4>
    <h4 className='presentacion-introdiccion'>Podrás encontrar información detallada de más de 100 especies de dinosaurios, desde los más conocidos y emblemáticos como el <a>Tiranosaurio Rex</a> y el <a>Velociraptor</a>, hasta los menos populares pero igualmente fascinantes como el <a>Amargasaurus</a> y el <a>Argentinosaurus</a>.</h4>
    <h4 className='presentacion-introdiccion'>Además de la información detallada sobre cada especie, DinoInfo cuenta con ilustraciones impresionantes que te permitirán visualizar con precisión cómo eran estos animales en su tiempo.</h4>
    </div>
  )
}
