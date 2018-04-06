let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
      this.id = ++driverId
      this.name = name

      store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  // get all this driver's trips
  // get all the passenger ids from those trips
  // return all those passengers
  // passengerId_store = this.trips().passengerId.filter


  passengerIds(this.trips) {
    return trips.reduce(function(passengerIds, trip){
      return passengerIds.push(trip.passengerId)
    }, [])
  }
  
  // function totalRevenue(drivers) {
  //   return drivers.reduce(function(total, driver){
  //     return total + driver.revenue
  //   }, 0)
  // }

  // passengers(){
  //   return store.trip.filter(trip => {
  //     if (trip.driverId === this.id){ return trip.passengerId } 
  //   })
  // }
}

let passengerId = 0
class Passenger {
  constructor(name) {
      this.id = ++passengerId
      this.name = name

      store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  // drivers(){
  //   return store.drivers.filter(driver => {
  //     return driver.passengerId === this.id
  //   })
  // }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId

    if (driver) {
        this.driverId = driver.id
    }

    if (passenger) {
      this.passengerId = passenger.id
    }

    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
}
