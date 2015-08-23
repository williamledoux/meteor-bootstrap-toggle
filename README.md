# Meteor BootstrapToggle v2.2.1

Meteor client-side component that maps a `BoostrapToggle` (`v2.2.1`) to a Session var. The binding is bi-directionnal, so if the `Session` var is updated, the component will change, and if the component is clicked, the `Session` var will ger updated.

## Usage

```html
    <template name="toggles">
        {{> BootstrapToggle options=toggle_A_options var="A"}}
        {{> BootstrapToggle options=toggle_B_options var="B"}}
    </template>
```

```javascript
    if (Meteor.isClient){
        Session.set("A", true);
        Session.set("B", false);

        Template.toggles.helpers({
            "toggle_A_options": function(){
                return {
                    "size": "small"
                }
            },
            "toggle_B_options": function(){
                return {
                    "onstyle" : "success",
                    "offstyle": "danger",
                };
            }
        });
    }
```
