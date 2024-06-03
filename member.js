function skillsMember() {
  return {
    restrict: 'E',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMember',
    bindToController: true,
    templateUrl: 'member.html'
  };
}