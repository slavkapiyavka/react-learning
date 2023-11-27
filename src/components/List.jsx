export default function List ({ listTitle }) {
  const codeString = "{isPlayerA && <Counter person=\"Taylor\" />}";

  return (
    <ol>
      { listTitle }
      <li>
        почему cra? в <a href="https://legacy.reactjs.org/docs/create-a-new-react-app.html">документации</a> react cra отмечен как legacy и предлагает перейти на <a href="https://react.dev/">новый сайт</a> и установить <a href='https://react.dev/learn/start-a-new-react-project'>фреймворк</a> на выбор
      </li>
      <li>
        <blockquote>**Фреймворк** - это структура и правила, которые определяют, как мы должны организовывать свое приложение. Фреймворк контролирует поток выполнения вашего кода.
          Основное отличие между ними заключается в том, что с библиотекой мы контролируем поток выполнения, вызывая функции по своему усмотрению, а с фреймворком поток выполнения контролируется самим фреймворком, и мы пишем код, который вызывается фреймворком.
        </blockquote>
        <p>что имеется в виду под потоком выполнения? </p>
      </li>
      <li>
        <blockquote>Виртуальный DOM - это промежуточное представление DOM в памяти компьютера.</blockquote>
        <p>В оперативной, надо полагать?</p>
        <p>А когда мы собираем и выкладываем сайт на хостинг - на этом сайте тоже есть virtual dom?</p>
      </li>
      <li>Что такое <code>React.StrictMode</code>?</li>
      <li>
        Читал главу Vitrual DOM, прочитал статьи из конца главы, там упоминали Fiber. Virtual DOM и Fiber - что актуально на данный момент? Есть какая-то ключевая разница между ними или пока это не важно и достаточно представления о Virtual DOM?
      </li>
      <li>
        какая уникальность ключа (key)? он должен быть уникальным в рамках проекта, на странице или среди компонентов-соседей?
      </li>
      <li>
        Что означает синтаксис в коде ниже?
        <code><pre>{ codeString }</pre></code>
      </li>
      <li>
        <code>
          <pre>
          {`const [count, setCount] = useState(0);
const increment = () => {
  setCount(count + 1);
};`}
          </pre>
        </code>

        Каким образом обновляется count, если в setCount мы передаём результат сложения?
        Будет ли какая-то разница, или сайдэффект, если использовать одну из следующих записей: setCount(++count) / setCount(count + 1)
      </li>
      <li>
        <p>не очень понятен пункт про изменяемость state и props.</p>
        <p>в главе State написано: <blockquote>Простыми словами, это то, что ИЗМЕНЯЕТСЯ в компоненте, нежели props-ы которые неизменны.</blockquote></p>
        <p>Там же далее написано: <blockquote>State можно передавать в дочерние компоненты при помощи props.</blockquote></p>
      </li>
    </ol>
  )
}