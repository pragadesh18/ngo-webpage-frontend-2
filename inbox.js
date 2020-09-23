angular.module('ionicApp', ['ionic'])

.controller('emailsCtrl', function($scope, emailService) {
  
  $scope.data = {
    showDelete: false
  };
  
  $scope.onItemDelete = function(email) {
    $scope.emails.splice($scope.emails.indexOf(email), 1);
  };
  
  $scope.emails = emailService.getEmails();
  
})
.factory('emailService', function() {
	var emails = [];

	return {
		getEmails: function(){

        emails = [
          { id: 0, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 1, subject: 'Test subj #2', date: '0', from: 'John' },
          { id: 2, subject: 'Test subj #3', date: '0', from: 'dd John Doe' },
          { id: 3, subject: 'Test subj #4', date: '0', from: 'Doe' },
          { id: 4, subject: 'Test subj #1', date: '0', from: 'John' },
          { id: 5, subject: 'dfhdsfhsdfhsdf', date: '0', from: 'John Doe' },
          { id: 6, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 7, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 8, subject: 'dhfsdf dfhdasfhsdf', date: '0', from: 'John Doe' },
          { id: 9, subject: 'Test subj #11', date: '0', from: 'John Doe' },
          { id: 10, subject: 'Test subj #21', date: '0', from: 'John Doe' },
          { id: 11, subject: 'Test subj #31', date: '0', from: 'John Doe' },
          { id: 12, subject: 'Test subj #41', date: '0', from: 'John Doe' },
          { id: 13, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 14, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 15, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 16, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 17, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 18, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 19, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 20, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 21, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 22, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 23, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 24, subject: 'Test subj #1', date: '1', from: 'John Doe' },
          { id: 25, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 26, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 27, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 28, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 29, subject: 'dfhsdfhsdf dfshsd', date: '0', from: 'John Doe' },
          { id: 30, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 31, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 32, subject: 'Test subj #1', date: '0', from: 'ooo Doe' },
          { id: 33, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 34, subject: 'Test subj #1', date: '1', from: 'John Doe' },
          { id: 35, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 36, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 37, subject: 'Test subj #1', date: '1', from: 'John Doe' },
          { id: 38, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 39, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 40, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 41, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 42, subject: 'Test subj #1', date: '0', from: 'ooo Doe' },
          { id: 43, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 44, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 45, subject: 'Test subj #1', date: '0', from: 'aaa Doe' },
          { id: 46, subject: 'dfghsdfh fdhgs dfh', date: '0', from: 'John Doe' },
          { id: 47, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 48, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 49, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 50, subject: 'Test subj last', date: '0', from: 'John Doe' }
        ];      
      
				return emails;
		},
		getEmail: function(id){
			for(i=0;i<emails.length;i++){
				if(emails[i].id == id){
					return emails[i];
				}
			}
			return null;
		}
	}
});