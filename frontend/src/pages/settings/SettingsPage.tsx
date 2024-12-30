import React, {useState} from 'react';

const SettingsPage: React.FC = () => {
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [about, setAbout] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfilePicture(e.target.files[0]);
        }
    };

    const handleSave = () => {
        const formData = new FormData();
        if (profilePicture) formData.append('profilePicture', profilePicture);
        formData.append('about', about);
        if (password && newPassword) {
            formData.append('password', password);
            formData.append('newPassword', newPassword);
        }

        fetch('/api/settings', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Settings updated successfully!');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="space-y-4">
                {/* Profile Picture */}
                <div>
                    <label className="block text-sm font-medium mb-2">Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="block w-full text-sm"
                    />
                </div>

                {/* About Section */}
                <div>
                    <label className="block text-sm font-medium mb-2">About</label>
                    <textarea
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Write about yourself..."
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>

                {/* Change Password */}
                <div>
                    <label className="block text-sm font-medium mb-2">Current Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter current password"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    className="bg-emerald-500 text-white p-2 rounded-lg"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;
