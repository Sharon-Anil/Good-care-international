import React, { useState, useRef } from 'react';
import { Camera, Wand2, Loader2, Download, Image as ImageIcon } from 'lucide-react';
import { EditorState } from '../types';

interface ImageFilter {
  name: string;
  css: string;
}

const IMAGE_FILTERS: ImageFilter[] = [
  { name: 'Sepia', css: 'sepia(100%)' },
  { name: 'Grayscale', css: 'grayscale(100%)' },
  { name: 'Brightness', css: 'brightness(1.3)' },
  { name: 'Contrast', css: 'contrast(1.5)' },
  { name: 'Invert', css: 'invert(100%)' },
  { name: 'Saturate', css: 'saturate(2)' },
  { name: 'Hue Rotate', css: 'hue-rotate(90deg)' },
  { name: 'Blur', css: 'blur(5px)' },
];

const applyFilter = (imageDataUrl: string, filter: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        ctx.filter = filter;
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      }
    };
    img.src = imageDataUrl;
  });
};

const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<ImageFilter | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [status, setStatus] = useState<EditorState>(EditorState.IDLE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setStatus(EditorState.UPLOADING);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
        setSelectedFilter(null);
        setStatus(EditorState.IDLE);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyFilter = async (filter: ImageFilter) => {
    if (!selectedImage) return;
    
    setSelectedFilter(filter);
    setStatus(EditorState.GENERATING);
    try {
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 800));
      const result = await applyFilter(selectedImage, filter.css);
      setGeneratedImage(result);
      setStatus(EditorState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(EditorState.ERROR);
    }
  };

  return (
    <section id="ai-studio" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gold/10 rounded-full mb-4">
             <Wand2 className="text-gold w-8 h-8" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-navy mb-4">Photo Studio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your travel photos with beautiful filters and effects. 
            Upload your image and choose from a variety of artistic filters.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Input Section */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100 bg-white relative">
                <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                    <Camera size={20} /> Source Image
                </h3>
                
                <div 
                    className={`aspect-square rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden group ${selectedImage ? 'border-gold' : 'border-gray-300 hover:border-skyBlue hover:bg-sky-50'}`}
                    onClick={() => fileInputRef.current?.click()}
                >
                    {selectedImage ? (
                        <img src={selectedImage} alt="Original" className="w-full h-full object-cover" />
                    ) : (
                        <div className="text-center p-6">
                            <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3 group-hover:text-skyBlue transition-colors" />
                            <p className="text-gray-500 font-medium">Click to upload photo</p>
                            <p className="text-xs text-gray-400 mt-1">JPG, PNG supported</p>
                        </div>
                    )}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageUpload} 
                        className="hidden" 
                        accept="image/*"
                    />
                </div>

                {selectedImage && (
                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-4">Choose a Filter</label>
                    <div className="grid grid-cols-2 gap-3">
                      {IMAGE_FILTERS.map((filter) => (
                        <button
                          key={filter.name}
                          onClick={() => handleApplyFilter(filter)}
                          disabled={status === EditorState.GENERATING}
                          className={`py-3 px-3 rounded-lg font-semibold text-sm transition-all ${
                            selectedFilter?.name === filter.name
                              ? 'bg-gold text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-skyBlue hover:text-white'
                          } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          {filter.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Output Section */}
            <div className="p-8 bg-gray-50 flex flex-col relative">
                <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                    <Wand2 size={20} /> Result
                </h3>

                <div className="flex-grow flex items-center justify-center bg-white rounded-xl border border-gray-200 shadow-inner overflow-hidden aspect-square relative">
                    {generatedImage ? (
                        <img src={generatedImage} alt="Generated" className="w-full h-full object-cover animate-fade-in" />
                    ) : (
                        <div className="text-center text-gray-400">
                            {status === EditorState.GENERATING ? (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 border-4 border-skyBlue border-t-transparent rounded-full animate-spin"></div>
                                    <p>Applying filter...</p>
                                </div>
                            ) : selectedImage ? (
                                <p>Select a filter to preview</p>
                            ) : (
                                <p>Upload an image to get started</p>
                            )}
                        </div>
                    )}
                </div>

                {generatedImage && (
                    <a 
                        href={generatedImage} 
                        download={`good-care-${selectedFilter?.name.toLowerCase()}.png`}
                        className="mt-6 w-full py-4 bg-gold text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-yellow-500 transition-colors"
                    >
                        <Download size={20} /> Download Image
                    </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageEditor;