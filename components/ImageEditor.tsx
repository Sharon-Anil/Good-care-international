import React, { useState, useRef } from 'react';
import { Camera, Wand2, Loader2, Download, Image as ImageIcon } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';
import { EditorState } from '../types';

const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
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
        setStatus(EditorState.IDLE);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;
    if (!process.env.API_KEY) {
        alert("API Key is missing!");
        return;
    }

    setStatus(EditorState.GENERATING);
    try {
      const result = await editImageWithGemini(selectedImage, prompt);
      if (result) {
        setGeneratedImage(result);
        setStatus(EditorState.SUCCESS);
      } else {
        setStatus(EditorState.ERROR);
      }
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
          <h2 className="text-4xl font-heading font-bold text-navy mb-4">AI Photo Studio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powered by <span className="font-bold text-skyBlue">Nano Banana (Gemini 2.5)</span>. 
            Upload your travel photos and use magic commands like "Add a retro filter" or "Make it sunset".
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

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Magic Command</label>
                    <div className="relative">
                        <input 
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., Add fireworks in the sky..."
                            className="w-full p-4 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyBlue focus:border-transparent outline-none transition-all"
                        />
                        <Wand2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>

                <button 
                    onClick={handleGenerate}
                    disabled={!selectedImage || !prompt || status === EditorState.GENERATING}
                    className={`w-full mt-6 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${
                        !selectedImage || !prompt 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-skyBlue to-navy shadow-lg hover:shadow-xl'
                    }`}
                >
                    {status === EditorState.GENERATING ? (
                        <><Loader2 className="animate-spin" /> Generating Magic...</>
                    ) : (
                        <><Wand2 /> Generate Edit</>
                    )}
                </button>
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
                                    <p>Nano Banana is thinking...</p>
                                </div>
                            ) : (
                                <p>AI generated image will appear here</p>
                            )}
                        </div>
                    )}
                </div>

                {generatedImage && (
                    <a 
                        href={generatedImage} 
                        download="good-care-magic.png"
                        className="mt-6 w-full py-4 bg-gold text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-yellow-500 transition-colors"
                    >
                        <Download size={20} /> Download Masterpiece
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