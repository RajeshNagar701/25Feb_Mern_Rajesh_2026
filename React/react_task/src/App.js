import Class_component from "./component/Class_component";
import Func_component from "./component/Func_component";
import Css_apply from "./css_apply/Css_apply";
import Jsx_comp from "./JSX/Jsx_comp";
import Layout from "./Layout/Layout";
import LifeClass from "./LifeCycle/Class/LifeClass";
import LifeFunc from "./LifeCycle/Func/LifeFunc";
import Module_css from "./Module_css/Module_css";
import Props_main from "./Props/Props_main";
import Sass from "./Sass/Sass";
import Class_state from "./state/class/Class_state";
import Func_state from "./state/func/Func_state";


function App() {
  return (
    <div className="container mt-5">
      {
        //<Func_component/>
        //<Class_component/>

        //<Jsx_comp/>
        //<Layout/>

        //<Css_apply />
        //<Module_css/>
        //<Sass/>

        //<Props_main />

        //<Class_state/>
        //<Func_state/>

        //<LifeClass/>
        <LifeFunc/>
      }
      
    </div>
  );
}

export default App;
