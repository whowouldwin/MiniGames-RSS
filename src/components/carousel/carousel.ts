export const createCarousel = (): HTMLElement => {
    const section: HTMLElement = document.createElement("section");
    section.className = "carousel";

    const header: HTMLDivElement = document.createElement("div");
    header.className = "carousel__header";

    const title: HTMLHeadingElement = document.createElement("h2");
    title.className = "carousel__title";
    title.textContent = "New Games";

    const navigation: HTMLDivElement = document.createElement("div");
    navigation.className = "carousel__navigation";

    const track: HTMLDivElement = document.createElement("div");
    track.className = "carousel__track";

    header.append(title, navigation);
    section.append(header, track);

    return section;
};