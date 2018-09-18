/**
 * @author Landmaster
 */

let avatars = document.getElementsByClassName('avatarContainer');
for (let i=0; i<avatars.length; ++i) {
	avatars[i].addEventListener("click", function () {
		this.classList.toggle('active');
	});
}