$(document).ready(function() {
    
    // 1. Hiệu ứng Hover làm nổi bật các thẻ bài viết (Card)
    $('.card').hover(
        function() {
            $(this).css({'transform': 'translateY(-5px)', 'transition': '0.3s', 'box-shadow': '0 10px 20px rgba(0,0,0,0.1)'});
        },
        function() {
            $(this).css({'transform': 'translateY(0)', 'box-shadow': 'none'});
        }
    );

    // 2. Xử lý sự kiện gửi Comment/Phản hồi (Tương tác Client-side)
    $('#comment-form').on('submit', function(e) {
        e.preventDefault(); // Ngăn trang bị reload lại

        // Lấy dữ liệu từ ô nhập
        let name = $('#comment-name').val().trim();
        let text = $('#comment-text').val().trim();

        if(name !== "" && text !== "") {
            // Tạo cấu trúc HTML comment mới
            let newComment = `<div class="comment-item" style="display:none;">
                                <strong>${name}:</strong> ${text}
                              </div>`;
            
            // Thêm vào danh sách và dùng hiệu ứng SlideDown để hiển thị mượt mà
            $('#comment-list').append(newComment);
            $('.comment-item').last().slideDown(400);

            // Xóa sạch form sau khi gửi thành công
            $('#comment-name').val('');
            $('#comment-text').val('');
            
            // Tự động cuộn xuống comment mới nhất
            $('#comment-list').animate({ scrollTop: $('#comment-list')[0].scrollHeight }, 500);
        }
    });
});
