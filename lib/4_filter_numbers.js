// Modify this function to get its tests passing.
// 
// Remember: Don't change the name of the function. Just modify its body.
// 
// Run `bin/check` from the command line to execute the automated tests.

module.exports = {
  filter_numbers: function(arr){
    function greaterThan(value) {
      return value < 10;
    }
    return arr.filter(greaterThan);

  }
}