import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { locations } from "#constants";

const ArchiveComponent = () => {
    const { openWindow } = useWindowStore();

    // Get trash items from TRASH_LOCATION
    const trashItems = locations.trash.children;

    // Open image in a separate Image window
    const openItem = (item) => {
        if (item.fileType === "img") {
            openWindow("imgfile", {
                name: item.name,
                imageUrl: item.imageUrl,
            });
        }
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="trash" />
                <h2>Archive</h2>
            </div>

            <div className="bg-white flex h-full">
                {/* Content area - Finder-style file layout */}
                <ul className="content">
                    {trashItems.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ArchiveWindow = WindowWrapper(ArchiveComponent, "trash");

export const Archive = ArchiveWindow;
export default ArchiveWindow;
