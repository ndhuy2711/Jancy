import { useEffect } from "react";
import { useLocation } from "react-router";

const titles = {
    "/": "Jancy",
    "/doi-ngu": "Jancy - Dịch Vụ Bất Động Sản Toàn Cầu",
    "/truyen-thong": "Trải nghiệm BĐS cùng Jancy",
    "/tuyen-dung": "Tham gia cùng Jancy",
    "/ve-toi": "Thành công trong BĐS đến từ việc giao tiếp cá nhân và thiết lập kết nối bằng cách xác định nhu cầu và mong đợi của KH ngay từ đầu",
    "/du-an": "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế",
    "/du-an/can-ho": "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế",
    "/du-an/biet-thu": "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế",
    "/du-an/nha-pho": "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế",
    "/du-an/khu-nghi-duong-sinh-thai": "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế",
    "/bai-viet": "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế",
    "/bai-viet/danh-muc/tin-tuc": "Cùng Jancy cập nhật các tin tức mới của thị trường",
};

const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = titles[location.pathname] || "MyApp";
    }, [location]);

    return null;
};

export { TitleUpdater };
