import './App.css'

export function App () {
    return (
        <article className = 'tw-followCard'>
            <header className = 'tw-followCard-header'>
                <img
                className = 'tw-followCard-avatar'
                alt = "avatar" src="https://unavatar.io/sindresorhus@gmail.com"></img>     
                <div>
                    <strong>Manolo</strong>
                    <span>@hola</span>
                </div>

            </header>

            <aside>
                <button className = 'tw-followCard-button'>
                    Seguir  
                </button>
            </aside>       
        </article>




    )
}