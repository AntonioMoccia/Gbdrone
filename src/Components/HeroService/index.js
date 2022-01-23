import React from 'react'
import {
    HeroService_Wrapper_FotoLefth, 
    HeroService_Text_FotoLefth,
    HeroService_Text_FotoRight,
    HeroService_Wrapper_FotoRight

} from './styled'

function index({title,text, image}) {

    return (
        <>

<HeroService_Wrapper_FotoLefth>
            <img src={image} />
            <HeroService_Text_FotoLefth>
                            <h1>{title}</h1>
                        <p>{text}</p>
            </HeroService_Text_FotoLefth>
        </HeroService_Wrapper_FotoLefth>

        </>
    )
}

/*const Foto_Right = () => {
    return (
        <HeroService_Wrapper_FotoRight>

            <HeroService_Text_FotoRight>
                <h1>Exercitation</h1>
                <p>
                    Quis eiusmod ipsum mollit laboris pariatur eu. Sunt nostrud aliquip pariatur labore ullamco dolor consectetur Lorem voluptate officia officia excepteur in amet. Fugiat et consequat qui fugiat. Esse mollit ut do cupidatat consectetur eiusmod proident ullamco anim nisi mollit eiusmod. Pariatur dolore qui tempor incididunt ex esse esse cillum sint labore. Laborum est dolore officia nostrud velit ea consequat occaecat adipisicing officia amet.
                    Commodo qui nisi culpa nisi fugiat aliqua proident fugiat culpa duis. Eu duis proident culpa aute magna sunt et. Consequat magna occaecat proident laboris dolore proident veniam sit mollit sunt et aute sit. Incididunt do cillum ut deserunt non cupidatat elit veniam dolor. Aliquip et Lorem dolor aute aute duis laborum fugiat mollit cillum amet Lorem in eu.
                    Laborum labore ex proident anim amet sint aliquip id velit eiusmod. Ullamco do nostrud reprehenderit nulla. Consectetur do elit cupidatat consectetur ullamco aliqua labore sit esse in qui exercitation nisi. Consectetur elit et in duis excepteur in.
                    Qui sint ipsum elit nostrud consectetur. Consectetur aliqua proident aliqua sint duis Lorem pariatur dolore ea dolore aliquip sint sint laborum. Consequat id officia excepteur commodo voluptate reprehenderit qui proident velit. Elit nisi velit dolor voluptate. Laborum anim duis dolore labore irure commodo velit.
                    Aliquip amet esse consectetur quis ex amet veniam do. Laborum aute culpa labore culpa laboris. Minim consequat velit do adipisicing irure nisi do eu anim veniam deserunt.
                    </p>
            </HeroService_Text_FotoRight>
            <img src={Photo} />
        </HeroService_Wrapper_FotoRight>
    )
}*/



export default index
