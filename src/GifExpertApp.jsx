import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    console.log(categories)

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        {/* Listado de Gif */}
        <ol>
            { categories.map( (category) => {
                return <li key={ category }> { category } </li>
            }) }
        </ol>
            {/* GitItem */}
    </>
    )
}
