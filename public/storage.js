// Function to save data to localStorage
function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to retrieve data from localStorage
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Example usage:
// Save user preferences
const userPreferences = {
    theme: 'dark',
    notifications: true,
};
saveData('preferences', userPreferences);

// Retrieve and use saved preferences
const savedPreferences = getData('preferences');
if (savedPreferences) {
    console.log('Saved Preferences:', savedPreferences);
} else {
    console.log('No saved preferences found.');
}
