module.exports = async (req, res) => {
  const { docId, token } = req.body;
  
  if (!token) {
    return res.status(400).json({ code: -1, msg: 'Missing token' });
  }
  
  try {
    const response = await fetch(`https://open.feishu.cn/open-apis/docx/v1/documents/${docId}/raw_content`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ code: -1, msg: error.message });
  }
};
