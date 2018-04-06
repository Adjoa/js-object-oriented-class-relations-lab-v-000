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

  passengers(){
    // get all the driver's trips
    let mytrips = this.trips()
    // get all the passengers from the driver's trips
    let agg = []
    for(let i= 0; i < mytrips.length; i++ ){
      let passenger = mytrips[i].passenger()
      agg.push(passenger)
    }

    // return them
    return agg
  }
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
