Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
like_or_dislike([Dislike]) ➞ Dislike
like_or_dislike([Like, Like]) ➞ Nothing
like_or_dislike([Dislike, Like]) ➞ Like
like_or_dislike([Like, Dislike, Dislike]) ➞ Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.

# Pomodoro 1

* Should return Nothing when the list is empty OK

* Should return Like when only a like is sended OK

* Should return Dislike when only a Dislike is sended OK

* Should return nothing when two likes are sended. OK

* Should return nothing when two Dislikes are sended. OK

* Should return Dislike when Like and Dislike are sended consecutively. OK

* Should return Like when Dislike and Like are sended consecutively. OK

* Should return Nothing when Like, Dislike and Dislike are sended consecutively.
