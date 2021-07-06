<?php

class Index_Model extends Model
{
	public function __construct()
	{
		parent::__construct();
	}
	public function getAllrecords()
	{
		return $this->db->select("SELECT * FROM `mvc` ORDER BY id DESC");
	}
	public function submit_index($data)
	{
		$this->db->insert('mvc', $data);
	}
}
	