Feature: Users real-time tracking

  Background:
    Given I'm a logged user
    And I'm in a group with other users

  Scenario: User can track other users in their groups in real-time
    When I access my group tracking information
    Then I should see the real-time location of online group members
    And the last known location of offline group members

  Scenario: User is able to share their location with other group members
    When I start sharing my location
    Then my last known location should be updated
    And my state should be `Active`

  Scenario: User can stop sharing their location with other group members
    When I stop sharing my location with that group
    Then the group's members should not see my location anymore
    * my state should be updated to `Inactive`
    But my last known location should still be available
