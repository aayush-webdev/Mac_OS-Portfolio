import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { gallery } from "../constants/index.js";
import { useState, useMemo } from "react";

const GalleryComponent = () => {
    const { openWindow } = useWindowStore();

    // Category filter state - null means "show all"
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Filtering logic: if no category selected, show all images
    // Otherwise, filter by matching category
    const filteredImages = useMemo(() => {
        if (!selectedCategory) {
            return gallery; // Show all
        }
        return gallery.filter((image) => image.category === selectedCategory);
    }, [selectedCategory]);

    // Open image in a separate Image window
    const openImageWindow = (image) => {
        openWindow("imgfile", {
            name: `Photo ${image.id}`,
            imageUrl: image.img,
        });
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Gallery</h2>
            </div>

            <div className="h-[70vh] bg-white">
                {/* Main Gallery Grid - No Sidebar */}
                <div className="h-full overflow-y-auto p-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {selectedCategory
                                ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
                                : "All Photos"}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {filteredImages.length} {filteredImages.length === 1 ? "photo" : "photos"}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                onClick={() => openImageWindow(image)}
                                className="group relative cursor-pointer"
                            >
                                {/* Image wrapper with preview style - matching Finder/imgfile */}
                                <div className="bg-gray-200 p-2 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="aspect-square overflow-hidden rounded bg-white">
                                        <img
                                            src={image.img}
                                            alt={`Gallery ${image.id}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <svg
                                className="w-16 h-16 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p className="text-sm">No photos in this category</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const GalleryWindow = WindowWrapper(GalleryComponent, "photos");

export const Gallery = GalleryWindow;
export default GalleryWindow;

