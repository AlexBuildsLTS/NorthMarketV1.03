import React from 'react';
import { Upload, X } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface ProductFormData {
  title: string;
  price: number;
  description: string;
  category: string;
  images: File[];
}

const ProductForm = () => {
  const [formData, setFormData] = React.useState<ProductFormData>({
    title: '',
    price: 0,
    description: '',
    category: '',
    images: [],
  });
  const [previewUrls, setPreviewUrls] = React.useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
      
      // Create preview URLs
      const newPreviewUrls = files.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Product Title
        </label>
        <Input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Price
        </label>
        <Input
          type="number"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Category
        </label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          required
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home & Garden</option>
          <option value="books">Books</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 min-h-[100px]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Product Images
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {previewUrls.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          {previewUrls.length < 4 && (
            <label className="w-full h-32 border-2 border-dashed border-navy-700 rounded-lg flex items-center justify-center cursor-pointer hover:border-emerald-500">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                multiple
              />
              <Upload className="w-6 h-6 text-gray-400" />
            </label>
          )}
        </div>
      </div>

      <Button type="submit" fullWidth>
        List Product
      </Button>
    </form>
  );
};

export default ProductForm;