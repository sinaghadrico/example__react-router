import React from "react"
import { Route, Switch } from "react-router-dom"
import routes from "./routes"
import Template from "components/Template"
import AuthProvider from "components/AuthProvider"
import PrivateRoute from "components/PrivateRoute"


// function RouteWithSubRoutes(route:any) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

function App() {
  return (
    <AuthProvider>
      <Template>
        <Switch>
          {routes.map((route:any,index:number) =>
            route.private === true ? (
              <PrivateRoute key={'route'+index} {...route} />
            ) : (
              <Route key={'route'+index} {...route} />
            )
          )}
        </Switch>
      </Template>
    </AuthProvider>
  )
}

export default App
