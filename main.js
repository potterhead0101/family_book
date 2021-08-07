var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", 
"https://i.pinimg.com/236x/dd/de/cb/dddecbdc7e5119162cf201a67e1b0ef3--good-afternoon-afternoon-delight.jpg",                                               "https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200466/91961521-mom-wearing-short-sleeve-clothes-is-guiding.jpg?ver=6",
                     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Frezjay%2Fsisters%2F&psig=AOvVaw1JpPm8TEL7hpC0kOpDDiY9&ust=1622534494576000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCrw5-68_ACFQAAAAAdAAAAABAV",
                         ];
            var names = ["Family Book","Hari Singh Mahla","Manju Mahla","Aaysu Mahla"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
