// import PropTypes from 'prop-types';

var data = [
    {
        "name": "Baked Salmon"
        , "ingredients": [
            { "name": "Salmon", "amount": 1, "measurement": "1 lb" }
            , { "name": "Pine Nut", "amount": 1, "measurement": "cup" }
            , { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" }
            , { "name": "Yellow Squash", "amount": 1, "measurement": "med" }
            , { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" }
            , { "name": "Garlic", "amount": 3, "measurement": "cloves" }
        ]
        , "steps": [
            "Preheat the oven to 350 degrees."
            , "Spread the olive oil around a glass baking dish."
            , "Add the salmon, garlic, and pine nuts to the dish"
            , "Bake for 15 minutes"
            , "Add the yellow squash and put back in the oven for 30 mins"
            , "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
        ]
    },
    {
        "name": "Fish Tacos"
        , "ingredients": [
            { "name": "Whitefish", "amount": 1, "measurement": "1 lb" }
            , { "name": "Cheese", "amount": 1, "measurement": "cup" }
            , { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" }
            , { "name": "Tomatoes", "amount": 2, "measurement": "large" }
            , { "name": "Tortillas", "amount": 3, "measurement": "med" }
        ]
        , "steps": [
            "Cook the fish on the grill until hot."
            , "Place the fish on the 3 tortillas."
            , "Top them with lettuce, tomatoes, and cheese."
        ]
    }
];

const Menu = ({ title, recipes }) =>
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {
                recipes.map((recipe, i) =>
                    <Recipe key={i} {...recipe} />
                )
            }
        </div>
    </article>

const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {
                ingredients.map((ingredient, i) =>
                    <li key={i}>{ingredient.name}</li>
                )
            }
        </ul>
        <section className="instructions">
            <h2>Cooking Instructions</h2>
            {
                steps.map((step, i) =>
                    <p key={i}>{step}</p>
                )
            }
        </section>
        {/* <section className="summary">
            <summary ingredients={ingredients} steps={steps} title={name} />
        </section> */}
    </section>

// class Summary extends React.Component {
//     render() {
//         const { ingredients, steps, title } = this.props;

//         return (
//             <div className="summary">
//                 <h1>{title}</h1>
//                 <p>
//                     <span>{ingredients} Ingredients | </span>
//                     <span>{steps} Steps</span>
//                 </p>
//             </div>
//         );
//     }
// }

// Summary.propTypes = {
//     ingredient: PropTypes.number,
//     steps: PropTypes.number,
//     title: (props, propName) => 
//         (typeof props[propName] !== 'string') ?
//             new Error('A title must be a string') :
//                 (props[propName].length > 20) ?
//                     new Error('title is over 20 characters') :
//                         null
// };

// Summary.defaultProps = {
//     ingredient: 0,
//     steps: 0,
//     title: '[recipe]'
// }

ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />
    , document.getElementById('react-container')
)