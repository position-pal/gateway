Feature: Users routes tracking

  Background:
    Given I'm a logged user
    And I'm in a group with other users

  Scenario: User can activate a route that is recorded and visible to group members
    When I activate the routing mode indicating a destination and the ETA
    Then my state is updated to `Routing`
    * my group's members receive a notification indicating I've started a routing
    And my group's members can see the route I've been taken since activating routing mode

  Scenario Outline: A route can be stopped
    Given I'm in routing mode
    When <event>
    Then the routing is stopped
    * the route discarded
    * my state is updated to `Active`
    And my group's members receive a notification indicating the route has been successfully stopped

    Examples:
      | event |
      | I arrive at the destination |
      | I stop the routing |

  Scenario Outline: Route notifications
    Given I'm in routing mode
    When <event>
    Then my group's members receive a notification indicating <event>

    Examples:
      | event |
      | I have not arrived by the estimated time |
      | I have been stuck in the same position for a while |
      | I have gone offline |
