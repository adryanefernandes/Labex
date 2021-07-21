import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../pages/public/home/HomePage'
import ListTripsPage from '../pages/public/listTrips/ListTripsPage'
import ApplicationFormPage from '../pages/public/application/ApplicationPage'
import LoginPage from '../pages/public/login/LoginPage'
import ErrorPage from '../pages/public/error/ErrorPage'

import AdminHomePage from '../pages/private/adminHome/AdminHomePage'
import CreateTripPage from '../pages/private/createTrip/CreateTripPage'
import TripDetailsPage from '../pages/private/tripDetails/TripDetailsPage'

function RouterPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/trips/list'>
          <ListTripsPage />
        </Route>

        <Route exact path='/trips/application'>
          <ApplicationFormPage />
        </Route>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route exact path='/admin/trips/list'>
          <AdminHomePage />
        </Route>

        <Route exact path='/admin/trips/create'>
          <CreateTripPage />
        </Route>

        <Route exact path='/admin/trips/:id'>
          <TripDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RouterPage