let os = 'android'

class IOSButton {}

class AndroidButton {}

// Without Factory
const button1 = os === "ios" ? new IOSButton() : new AndroidButton();
const button2 = os === "ios" ? new IOSButton() : new AndroidButton();

/*
    🠧🠧🠧 BEST PRACTICE 🠧🠧🠧
*/

class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        if (os === "ios") {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

// With Factory
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
