import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var ColocatorWrapper: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public platform: Platform) { }
  
  // Library Control
  startColocator() {
    this.platform.ready().then(() => {

      document.getElementById("label").innerHTML = "Starting Colocator...";

      ColocatorWrapper.start("iosrtest", function (s) {
          document.getElementById("label").innerHTML = "Success " + s;
      }, function (e) {
        document.getElementById("label").innerHTML = "Fail " + e;
      });

    });
  }

  stopColocator() {
    this.platform.ready().then(() => {

      document.getElementById("label").innerHTML = "Stopping Colocator...";

      ColocatorWrapper.stop(function (s) {
        document.getElementById("label").innerHTML = "Success " + s;
      }, function (e) {
        document.getElementById("label").innerHTML = "Fail " + e;
      });

    });
  }

  // Common Methods
  getDeviceID() {
    document.getElementById("label").innerHTML = "Getting device ID...";
    
    ColocatorWrapper.getDeviceId(function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
  }

  addAlias() {
    document.getElementById("label").innerHTML = "Adding Alias...";
    
    ColocatorWrapper.addAlias("YOUR_KEY", "YOUR_VALUE", function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
  }

  // Location Methods
  requestLocation() {
    document.getElementById("label").innerHTML = "Requesting One Location...";
    
    ColocatorWrapper.requestLocation(function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
}

registerLocationListener() {
    document.getElementById("label").innerHTML = "Registering for Location Updates...";
    
    ColocatorWrapper.registerLocationListener(function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
}

unregisterLocationListener() {
    document.getElementById("label").innerHTML = "Unregistering from Location Updates...";
    
    ColocatorWrapper.unregisterLocationListener(function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
}

// Android Methods
startForegoundService() {
    document.getElementById("label").innerHTML = "Starting Foreground Service...";

    ColocatorWrapper.setServiceNotificationInfo("YOUR_TEXT", 1, "default", function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
}

// iOS Methods
triggerBluetoothPermissionPopUp() {
    document.getElementById("label").innerHTML = "Triggering Bluetooth Popup...";
    
    ColocatorWrapper.triggerBluetoothPermissionPopUp(function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
}

triggerMotionPermissionPopUp() {
    document.getElementById("label").innerHTML = "Triggering Motion Popup...";
    
    ColocatorWrapper.triggerMotionPermissionPopUp(function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
}

testLibraryIntegration() {
    document.getElementById("label").innerHTML = "Testing Library Integration...";
    
    ColocatorWrapper.testLibraryIntegration(function (s) {
      document.getElementById("label").innerHTML = "Success " + s;
    }, function (e) {
      document.getElementById("label").innerHTML = "Fail " + e;
    });
}

}
