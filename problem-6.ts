// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}

const userProfile: Profile = {
    name: "Rehad",
    age: 22,
    email: "rehadhasan664@gmail.com"
};

const updatedProfile = updateProfile(userProfile, { name: 'Saiful Islam Rehad' });

// console.log(updatedProfile);

